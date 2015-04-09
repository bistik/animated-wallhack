package main

import (
    "fridge/banana"
)

func main() {
        show_summary()
}

func show_summary() {
        println("Hohoho")
        banana := get_banana()
        println(banana.Id)
        println(banana.basket[0].Name)
}

func get_banana() Banana {
        foo := Banana {
                Id: "122333",
                Win: 1,
        }
        bar := Potato {
                Name: "Bane",
                Kda: "2-3-18",
                Team: 1,
        }
        foo.basket[0] = bar
        return foo
}


