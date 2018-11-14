//type your code inside this function
function TorrentFile(){

//first function
function numberOfPackets(fileSize){
    return fileSize/50;
}




//second function
function buildTorrentPacketArray(numOfPackets){
    let list = [];
    let length = numOfPackets;
    for (let i=0; i<length; i++){
        list[i] = 1;
    }
    return list;
}



}

//main test methods
