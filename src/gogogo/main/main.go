package main

import (
    "gogogo/fridge/banana"
    "gogogo/fridge/potato"
)

func main() {
        show_summary()
}

func show_summary() {
        println("Hohoho")
        banana := get_banana()
        println(banana.Id)
        println(banana.Basket[0].Name)
}

func get_banana() banana.Banana {
        foo := banana.Banana {
                Id: "122333",
                Win: 1,
        }
        bar := potato.Potato {
                Name: "Bane",
                Kda: "2-3-18",
                Team: 1,
        }
        foo.Basket[0] = bar
        return foo
}


