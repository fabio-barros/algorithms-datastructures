#include <stdio.h>

void passByPointer(int *ptr)
{
    *ptr = 5;
    printf("Value is %d\n", *ptr);
}

int main()
{
    int var = 6;
    printf("var = %d\n", var);
    passByPointer(&var);
    printf("var = %d\n", var);
}