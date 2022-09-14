#include <iostream>
using namespace std;

int factorial(int n)
{
    while(n != 0)
    {
        return n*factorial(n-1);
    }
    return 1;
}


int main()
{
    int answer = factorial(5);
    cout << answer << endl;

    return 0;
}