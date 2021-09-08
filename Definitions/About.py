#!/usr/bin/python3
from tkinter import *


def about():
    about_root = Tk()
    about_root.title("EcoGame: About")
    info = Frame(about_root)
    info.grid(row=0, column=0)
    Label(info, text="Authors:").grid(row=0, column=0)
    Label(info, text="Viacheslav Nikiforov").grid(row=1, column=0)
    Label(info, text="Time of work: 2021").grid(row=0, column=1)
    Button(about_root, text="Close", command=lambda: about_root.destroy()).grid(row=1, column=0)
    about_root.mainloop()
