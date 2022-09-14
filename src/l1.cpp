#include <iostream>
using namespace std;

void fibonacci(int n,int a,int b);
{
    if( n == 0)
    {
        return;
    }
    else
    {
        cout << a+b << " ";
        int temp = a;
        a = a+b;
        b = temp;
        return fibonacci(n-1,a,b);
    }
}


int main()
{
    fibonacci(5,2,1);

    return 0;
}