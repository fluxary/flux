document.getElementById('downloadBtn').addEventListener('click', function() {
    const fileUrl = 'FLUX_Setup.exe'; 
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'FLUX_Setup.exe'; 
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});