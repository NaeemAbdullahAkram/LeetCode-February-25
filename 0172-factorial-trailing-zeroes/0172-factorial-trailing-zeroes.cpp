class Solution {
public:
    int trailingZeroes(int n) {
        if(n==0 || n==1){
            return 0;
        }
        int n5=0;
        while(n>=5){
            n/=5;
            n5+=n;
        }
        return n5;
    }
};