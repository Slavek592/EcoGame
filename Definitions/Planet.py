#!/usr/bin/python3
from tkinter import *
from Definitions import About


def planet():
    def new_turn():
        new_money = money_label["text"] - population_label["text"] + industry_label["text"]
        new_pollution = pollution_label["text"] + population_label["text"] + industry_label["text"]
        new_carbon = carbon_label["text"] - round(nature_label["text"] / 4) + industry_label["text"]
        new_nature = nature_label["text"] - round(industry_label["text"] / 4)
        turn_label.configure(text=turn_label["text"] + 1)
        money_label.configure(text=new_money)
        pollution_label.configure(text=new_pollution)
        carbon_label.configure(text=new_carbon)
        nature_label.configure(text=new_nature)

    def cleaning_project():
        money_label.configure(text=money_label["text"] - 5)
        pollution_label.configure(text=pollution_label["text"] - 10)

    def burning_project():
        money_label.configure(text=money_label["text"] + 5)
        pollution_label.configure(text=pollution_label["text"] - 10)
        carbon_label.configure(text=carbon_label["text"] + 10)

    def planting_project():
        money_label.configure(text=money_label["text"] - 10)
        nature_label.configure(text=nature_label["text"] + 5)
        carbon_label.configure(text=carbon_label["text"] - 5)

    def building_project():
        industry_label.configure(text=industry_label["text"] + 1)
        nature_label.configure(text=nature_label["text"] - 5)
        carbon_label.configure(text=carbon_label["text"] + 5)

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
    Label(right, text="Industry: ").grid(row=3, column=0)
    industry_label = Label(right, text=12)
    industry_label.grid(row=3, column=1)
    Label(right, text="Nature: ").grid(row=4, column=0)
    nature_label = Label(right, text=50)
    nature_label.grid(row=4, column=1)
    Label(right, text="Carbon: ").grid(row=5, column=0)
    carbon_label = Label(right, text=50)
    carbon_label.grid(row=5, column=1)

    projects = Frame(root)
    projects.grid(row=0, column=3)
    cleaning_button = Button(projects, text="Cleaning\nMoney - 5\nPollution - 10",
                             command=lambda: cleaning_project())
    cleaning_button.grid(row=0, column=0)
    burning_button = Button(projects, text="Burning\nMoney + 5\nPollution - 10\nCarbon + 10",
                            command=lambda: burning_project())
    burning_button.grid(row=0, column=1)
    planting_button = Button(projects, text="Planting\nMoney - 10\nNature + 5\nCarbon - 5",
                             command=lambda: planting_project())
    planting_button.grid(row=1, column=0)
    building_button = Button(projects, text="Building\nIndustry + 1\nNature - 5\nCarbon + 5",
                             command=lambda: building_project())
    building_button.grid(row=1, column=1)

    root.mainloop()
