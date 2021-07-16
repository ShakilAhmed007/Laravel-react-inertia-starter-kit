<?php

namespace Database\Factories;

use App\Models\Bookmark;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookmarkFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Bookmark::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'url' => '/storage/thambnils/stock.jpg',
            'thambnail' => '/storage/thambnails/stock.jpg',
            'title' => 'lofi hip hop radio - beats to sleep/chill',
            'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        ];
    }
}
