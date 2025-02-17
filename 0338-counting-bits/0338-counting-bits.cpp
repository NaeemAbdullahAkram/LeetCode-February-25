class Solution {
public:
vector<int> countBits(int n) {
    vector<int> result;
    int count, temp;
    for (int i = 0; i <= n; i++) {
        count = 0, temp = i;
        while (temp > 0) {
            temp = temp & (temp - 1);
            count++;
        } result.push_back(count);
    } return result;
}
};