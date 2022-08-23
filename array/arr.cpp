#include <iostream>

using namespace std;

void print(int *arr, int size)
{
    for (int x = 0; x < size; x++)
    {
        cout << arr[x] << " ";
    }
    cout << "\n";
}

void fill(int *arr, int size)
{
    for (int x = 0; x < 10; x++)
    {
        arr[x] = x;
    }
}
int main()
{
    int *arr = new int[10];
    fill(arr, 10);
    print(arr, 10);

    arr = new int[15]();

    print(arr, 15);
    return 0;
}
