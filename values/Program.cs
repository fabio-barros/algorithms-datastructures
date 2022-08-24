using System;
 
namespace values
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

