<template>
    <div class="about-container py-5">
      <!-- Hakkımızda Bölümü -->
      <div class="about-content d-flex justify-content-between align-items-center">
        <!-- Metin Bölümü -->
        <div class="text-section">
          <h2>Markamızın Hikayesi</h2>
          <br>
          <p>
            Biz, yaşam alanlarını sadece inşa etmekle kalmıyor, aynı zamanda yaşam tarzınızı da yeniden şekillendiriyoruz. 
            Yılların deneyimi ve yenilikçi bakış açımızla, her proje bizim için bir sanattır. Kaliteyi, estetiği ve müşteri memnuniyetini ön planda tutarak, her bir evde kusursuzluğu hedefliyoruz.
            <br><br>
            <strong>Misyonumuz:</strong> Size sadece bir ev değil, aynı zamanda bir yaşam deneyimi sunmak. 
            Her ayrıntıda konforu ve şıklığı yakalayarak, hayalinizdeki yaşam alanlarını gerçeğe dönüştürüyoruz.
            <br><br>
            <strong>Vizyonumuz:</strong> Sektördeki en yüksek standartları belirleyerek, müşteri beklentilerini aşan projelere imza atmak. 
            Yenilikçi tasarımlarımız ve mükemmeliyetçi yaklaşımımızla sektördeki lider konumumuzu sürdürmek.
          </p>
        </div>
        <!-- Video Bölümü -->
        <div class="video-wrapper">
          <video autoplay muted loop>
            <source src="@/assets/emlak.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .about-container {
    padding: 0 2rem;
  }
  
  .about-content {
    margin: 0 auto;
    max-width: 1200px;
  }
  
  .text-section {
    flex: 1;
    padding-right: 1rem;
  }
  
  .text-section h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #343a40;
  }
  
  .text-section p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #495057;
  }
  
  .video-wrapper {
    flex: 1;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }
  
  .video-wrapper video {
    width: 100%;
    height: auto;
  }
  
  @media (max-width: 768px) {
    .text-section {
      padding-right: 0;
      margin-bottom: 2rem;
    }
  
    .video-wrapper {
      margin: 0 auto;
      max-width: 100%;
    }
  }
  </style>
  