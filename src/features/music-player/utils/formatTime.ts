export const formatTime = (totalseconds:number) => {
    if(!totalseconds) return "0:00"; // !segundosTotales ya controla undefined  y null que .toString() no logra hace, a diferencia que String() si lo hace
    const minutes = Math.floor((totalseconds)/60);   
    const secondsSafe = Math.max(totalseconds, 0); // 0 para que no devuelva negativo 
    const remainingSeconds = Math.floor(secondsSafe%60);
    const formatSeconds = minutes + ":"+ remainingSeconds.toString().padStart(2, '0');
    return formatSeconds;
}

