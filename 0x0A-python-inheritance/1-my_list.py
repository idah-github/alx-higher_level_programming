#!/usr/bin/python3
""" class inheritance """


class MyList(list):
    """ Parent class """
    def __init__(self):
        """init object"""
        super().__init__()

        def print_sorted(self):
            """print the sorted list"""
            print(sorted(self))
