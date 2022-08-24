﻿using System;
using CSharp.Stacks;

//Programas declaram tipos -> Interfaces, Classes...
//  Campos, Métodos, propriedades e eventos são exemplos de membros
// Nome do Projeto é 
namespace CSharp
{
    class Program
    {
        public static void passByValue(int value)
        {
            value = 5;
            System.Console.WriteLine("Value inside passByValue: " + value);
        }
        static void Main(string[] args)
        {
           int var = 10;
           System.Console.WriteLine("Value before passByValue: " + var);    
            passByValue(var);
            System.Console.WriteLine("Value after passByValue: " + var);
        }
    }
}

