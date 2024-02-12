<?php

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class Visitor implements FilterInterface {

   public function before(RequestInterface $request, $arguments = null) {
      $date = date('Y-m-d');
      $ip_address = $request->getIPAddress();

      $check_visit = $this->check_visit($ip_address, $date);
      if ((int) $check_visit['jumlah'] < 1) {
         $this->insert_visit($ip_address, $date);
      }
   }

   public function after(RequestInterface $request, ResponseInterface $response, $arguments = null) {}

   private function insert_visit($ip_address, $date_visit) {
      try {
         $db = \Config\Database::connect();
         $builder = $db->table('tb_visitor');
         $builder->insert([
            'ip_address' => $ip_address,
            'date_visit' => $date_visit
         ]);
      } catch (\Exception $e) {
         die($e->getMessage());
      } catch (\Exception $e) {
         die($e->getMessage());
      }
   }

   private function check_visit($ip_address, $date_visit) {
      try {
         $db = \Config\Database::connect();
         $table = $db->table('tb_visitor');
         $table->select('count(*) as jumlah');
         $table->where('ip_address', $ip_address);
         $table->where('date_visit', $date_visit);

         $get = $table->get();
         $data = $get->getRowArray();
         $fieldNames = $get->getFieldNames();
         
         $response = [];
         if (isset($data)) {
            foreach ($fieldNames as $field) {
               $response[$field] = trim($data[$field]);
            }
         }
         return $response;
      } catch (\Exception $e) {
         die($e->getMessage());
      }
   }

}