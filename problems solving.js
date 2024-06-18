console.log("connecting");

function minPlanesToReachLastAirport(fuelArray) {
    const N = fuelArray.length;
    
    if (fuelArray[0] === 0) {
        return -1;
    }
    
    let queue = [[0, 0]]; 
    let visited = new Array(N).fill(false);
    visited[0] = true;
    
    while (queue.length > 0) {
        let [currentAirport, planesUsed] = queue.shift();
        
       
        if (currentAirport === N - 1) {
            return planesUsed;
        }
        
       
        for (let i = currentAirport + 1; i <= Math.min(currentAirport + fuelArray[currentAirport], N - 1); i++) {
            if (!visited[i]) {
                visited[i] = true;
                queue.push([i, planesUsed + 1]);
            }
        }
    }
    
    return -1;
}

// Example usage:
console.log(minPlanesToReachLastAirport([2, 1, 2, 3, 1])); // Output: 2
console.log(minPlanesToReachLastAirport([1, 6, 3, 4, 5, 0, 0, 0, 6])); // Output: 3
