#include <iostream>

using namespace std;

void passByReference(int &ref)
{
    ref = 4;
    cout << &ref << "\n";
}

void passByPointer(int *ptr)
{
    *ptr = 7;
    cout << &ptr << "\n";
}

void passByValue(int value)
{
    value = 5;
    cout << &value << "\n";
}

int main()
{
    int var = 6;
    cout << &var << "\n";
    passByPointer(&var);
    cout << &var << "\n";
    int a;
    cout << &a << "\n";
    passByReference(a);
    cout << &a << "\n";
    return 0;
}