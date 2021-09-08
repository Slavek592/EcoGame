#!/usr/bin/python3
from tkinter import *
from Definitions import About


def planet():
    def new_turn():
        turn_label.configure(text=turn_label["text"] + 1)
        money_label.configure(text=money_label["text"] + population_label["text"])
        pollution_label.configure(text=pollution_label["text"] + 1)

    def cleaning_project():
        money_label.configure(text=money_label["text"] - 5)
        pollution_label.configure(text=pollution_label["text"] - 10)

    def exit_game():
        print("Thanks for using!")
        root.destroy()

    root = Tk()
    root.title("EcoGame")

    left = Frame(root)
    left.grid(row=0, column=0)
    Label(left, text="Turn: ").grid(row=0, column=0)
    turn_label = Label(left, text=0)
    turn_label.grid(row=0, column=1)
    Button(left, text="Next turn", command=lambda: new_turn()).grid(row=1, column=0)
    Button(left, text="About", command=lambda: About.about()).grid(row=2, column=0)
    Button(left, text="Exit game", command=lambda: exit_game()).grid(row=3, column=0)

    center = Canvas(root)
    center.grid(row=0, column=1)
    planet_image = PhotoImage(file="Data/Planet.png")
    center.create_image(30, 30, anchor=NW, image=planet_image)

    right = Frame(root)
    right.grid(row=0, column=2)
    Label(right, text="Money: ").grid(row=0, column=0)
    money_label = Label(right, text=10)
    money_label.grid(row=0, column=1)
    Label(right, text="Population: ").grid(row=1, column=0)
    population_label = Label(right, text=7)
    population_label.grid(row=1, column=1)
    Label(right, text="Pollution: ").grid(row=2, column=0)
    pollution_label = Label(right, text=0)
    pollution_label.grid(row=2, column=1)

    projects = Frame(root)
    projects.grid(row=0, column=3)
    cleaning_button = Button(projects, text="Cleaning\nMoney - 5\nPollution - 10", command=lambda: cleaning_project())
    cleaning_button.grid(row=0, column=0)

    root.mainloop()
