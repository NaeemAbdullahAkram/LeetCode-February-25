// By: Gaurav Yadav
class Solution {
public:
    string smallestNumber(string pattern) {
        string str = "";
        vector<int>visited (10, 0);
        for(int i=1;i<10;i++){
            visited[i] = 1;
            if(h(pattern, 1, i, str, visited)){
                str.insert(str.begin() ,char(i + '0'));
                break;
            }
            visited[i] = 0;
        }
        return str;
    }
private:
    bool h(string&pattern, int i, int prev, string&str, vector<int>&visited){
        // Base case 
        if(i>pattern.size()) return true;

        // If last pattern was 'I'
        if(pattern[i-1]=='I'){
            for(int n = prev+1;n<10;n++){
                if(!visited[n]){
                    visited[n] = 1; 
                    if(h(pattern, i+1, n, str, visited)){
                        str.insert(str.begin() ,char(n + '0'));
                        return true;
                    }
                    visited[n] = 0; 
                }
            }
        }else{ // if last Pattern was 'D'
            for(int n = 1;n<prev;n++){
                if(!visited[n]){
                    visited[n] = 1; 
                    if(h(pattern, i+1, n, str, visited)){
                        str.insert(str.begin() ,char(n + '0'));
                        return true;
                    }
                    visited[n] = 0; 
                }
            }
        }
        return false;
    }
};