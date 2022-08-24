#include <stdio.h>

void passByValue(int value)
{
    value = 5;
    printf("Value is %d\n", value);
}

int main()
{
    int var = 6;
    printf("var = %d\n", var);
    passByValue(var);
    printf("var = %d\n", var);
}