var possibleBipartition = function(n, dislikes) {
    let adj = new Array(n + 1);
    for(let i = 0; i < n + 1; i++){
        adj[i] = new Array();
    }

    for(let d of dislikes){
        adj[d[0]].push(d[1])
        adj[d[1]].push(d[0])
    }

    let color = new Array(n + 1).fill(-1);
    function DFS(i){
        for(let c of adj[i]){
            if(color[c] === color[i]) return false;
            if(color[c] === -1){
                color[c] = 1 - color[i];
                if(!DFS(c)) return false;
            }
        }
        return true;
    }

    for(let i = 1; i <= n; i++){
        if(color[i] === -1){
            color[i] = 0;
            if(!DFS(i)) return false;
        }
    }
    return true;
};