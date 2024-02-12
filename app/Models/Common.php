<?php

namespace App\Models;

use CodeIgniter\Model;

class Common extends Model {

   protected $db;

   public function __construct() {
      $this->db = \Config\Database::connect();
   }

   public function getVisitor($date = []) {
      try {
         $table = $this->db->table('tb_visitor tv');
         $table->select('count(*) as jumlah, tv.date_visit');
         $table->whereIn('tv.date_visit', $date);
         $table->groupBy('tv.date_visit');

         $get = $table->get();
         $result = $get->getResultArray();
         $fieldNames = $get->getFieldNames();
         
         $response = [];
         foreach ($result as $key => $val) {
            foreach ($fieldNames as $field) {
               $response[$key][$field] = trim($val[$field]);
            }
         }
         return $response;
      } catch (\Exception $e) {
         die($e->getMessage());
      }
   }

}