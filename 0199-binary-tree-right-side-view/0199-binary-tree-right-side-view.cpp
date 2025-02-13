class Solution {
public:
void solve(TreeNode* root, vector<int>&ans, int level){
    if(root==NULL)return;
    if(ans.size()==level){
        ans.push_back(root->val);
    }
    solve(root->right,ans,level+1);
    solve(root->left,ans,level+1);
}
    vector<int> rightSideView(TreeNode* root) {
        if(root==NULL)return  {};
        vector<int>ans;
        solve(root,ans,0);
        return ans;
    }
};