class Solution {
public:
    int maxAbsoluteSum(vector<int>& nums) 
    {
        int ans=0;
        int csum=0;
        int max_pos=0;
        int min_neg=0;
        for(int i=0;i<nums.size();i++)
        {
            csum+=nums[i];
            if(csum>=0)
            {
                ans=max(ans,csum-min_neg);
                max_pos=max(max_pos,csum);
            }
            else
            {
                ans=max(ans,max_pos-csum);
                min_neg=min(min_neg,csum);
            }
        }
        return ans;
    }
};