#include<iostream>
using namespace std;
class sample
{
    private:
    int a;
    static int b;

    public:
    void getdata (int x)
    {
        a=x;
        b++ ;
    }
    void show ()
    {
        cout<<a<<" "<<b<<endl;

    }
};
int sample:: b;
int main()
{
    sample ob1,ob2,ob3;
    ob1.getdata(5);
    ob2.getdata(10);
    ob1.show();
    ob2.show();
    ob3.getdata(15);
    ob3.show();
    return 0;
}