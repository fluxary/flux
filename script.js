document.getElementById('downloadBtn').addEventListener('click', function() {
    const fileUrl = 'https://github.com/fluxary/flux/releases/download/v1.0.0/FLUX_Setup.exe'; 
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'FLUX-Setup.exe'); 
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
