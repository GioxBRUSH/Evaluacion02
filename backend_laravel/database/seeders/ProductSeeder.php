<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        {
            Product::create([
                'name'=> 'Pollo',
                'price' => '2500',
                'description' => 'Pollo asado de la casa',
                'image' => 'https://i.pinimg.com/originals/0a/0b/0a/0a0b0a0a0a0a0a0a0a0a0a0a0a0a0a0.jpg',
            ]);
        }
    }
}
