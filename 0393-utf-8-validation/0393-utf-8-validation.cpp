class Solution {
    bool isComplete(vector<int>& data, int i, int len) {
        int si = i;
        while(i < len+si) {
            if(i == data.size())
                return false;
            if(data[i] > 191 || data[i] < 128) 
                return false;
            i++;
        }
        return true;
    }

    public:
    bool validUtf8(vector<int>& data) {
        int i=0;
        while(i<data.size()) {
            if(data[i] < 128) {
                // It should be a one byte character
                i++;
            }
            else if(data[i] <= 223 && data[i] >= 192) {
                // It should be a two byte character
                i++;
                bool complete = isComplete(data, i, 1);
                if(complete == false)
                    return false;
                i += 1;
            }
            else if(data[i] <= 239 && data[i] >= 224) {
                // It should be a three byte character
                i++;
                bool complete = isComplete(data, i, 2);
                if(complete == false)
                    return false;
                i += 2;
            }
            else if(data[i] <= 247 && data[i] >= 240) {
                // It should be a four byte character 
                i++;
                bool complete = isComplete(data, i, 3);
                if(complete == false)
                    return false;
                i += 3;
            }
            else 
                return false;
        }
        return true;
    }
};