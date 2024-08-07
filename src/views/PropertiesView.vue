<template>
    <div class="container py-5">
      <div class="row">
        <!-- Evin Görseli -->
        <div class="col-md-6">
          <div id="propertyCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(property, index) in properties" :key="property.title" class="carousel-item" :class="{ active: index === 0 }">
                <img :src="property.image" class="d-block w-100" :alt="'Ev Görseli ' + (index + 1)">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#propertyCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Önceki</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#propertyCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Sonraki</span>
            </button>
          </div>
        </div>
  
        <!-- Evin Detayları -->
        <div class="col-md-6 d-flex flex-column justify-content-center">
          <h2 class="text-center">{{ currentProperty.title }}</h2>
          <p class="text-center text-muted">Evin Kodu: {{ currentProperty.code }}</p>
          <p class="lead text-center">₺{{ currentProperty.price }}</p>
          <p class="text-center">{{ currentProperty.description }}</p>
          
          <h5 class="text-center mt-4">Özellikler</h5>
          <ul class="list-unstyled text-center">
            <li v-for="(feature, index) in currentProperty.features" :key="index" class="feature-item">{{ feature }}</li>
          </ul>
  
          <!-- İletişim Butonu -->
          <div class="text-center mt-4">
            <button class="btn btn-dark btn-lg">İletişime Geç</button>
          </div>
        </div>
      </div>
  
      <!-- Evin İncelemeleri Bölümü -->
      <div class="mt-5">
        <h3 class="text-center mb-4">Ev İncelemeleri</h3>
        <div class="review-section text-center">
          <div v-for="(review, index) in currentProperty.reviews" :key="index" class="review-item">
            <h5>{{ review.name }}</h5>
            <p class="review-text">"{{ review.text }}"</p>
            <p class="review-rating">Puan: {{ review.rating }}</p>
          </div>
        </div>
      </div>
  
      <!-- Sıkça Sorulan Sorular (SSS) -->
      <div class="mt-5 mb-5">
        <h3 class="text-center mb-4">Sıkça Sorulan Sorular</h3>
        <div class="faq-section">
          <div class="faq-item">
            <h5>Ev nasıl temizlenir?</h5>
            <p>Bu evi temizlerken nemli bir bez kullanabilirsiniz. Kimyasal temizlik ürünlerinden kaçının.</p>
            <hr>
          </div>
          <div class="faq-item">
            <h5>Montaj için hangi araçlar gereklidir?</h5>
            <p>Montaj için düz tornavida ve alyan anahtarı gereklidir. Montaj talimatları ev ile birlikte verilmektedir.</p>
            <hr>
          </div>
          <div class="faq-item">
            <h5>Ev garantisi var mı?</h5>
            <p>Evet, evlerimiz 2 yıl garanti kapsamındadır. Garanti süresi içinde herhangi bir sorun yaşamanız durumunda bize ulaşabilirsiniz.</p>
            <hr>
          </div>
          <div class="faq-item">
            <h5>Ev teslim süresi nedir?</h5>
            <p>Ev, siparişinizden sonra 7 iş günü içinde teslim edilmektedir. Teslim süresi bölgeye göre değişiklik gösterebilir.</p>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import villa from '@/assets/villa.jpg';
  import daire from '@/assets/daire.jpg';
  import lüxev from '@/assets/lüxev.jpg';
  
  export default {
    name: 'PropertiesView',
    data() {
      return {
        properties: [
          {
            image: villa,
            title: 'Elegance Villa',
            code: '12345',
            price: '4999,00',
            description: 'Zarif tasarımı ve geniş bahçesiyle evinizin şıklığını artıran Elegance Villa, kaliteli yapısı ve modern detaylarıyla dikkat çekiyor.',
            features: [
              'Geniş bahçe',
              'Modern tasarım',
              'Yüksek kaliteli malzeme',
              'Rahat yaşam alanı'
            ],
            reviews: [
              { name: 'Ali K.', text: 'Bu villa harika! Hem geniş hem de çok şık. Kesinlikle tavsiye ederim.', rating: '★★★★☆' },
              { name: 'Ayşe Y.', text: 'Kalitesi mükemmel, ancak taşınması biraz zor oldu. Yine de çok beğendim.', rating: '★★★☆☆' }
            ],
            link: '/properties/'
          },
          {
            image: daire,
            title: 'Comfort Plus Daire',
            code: '12346',
            price: '5499,00',
            description: 'Yumuşak dokusu ve modern tasarımıyla Comfort Plus Daire, uzun süreli oturumlarda bile maksimum konfor sunar.',
            features: [
              'Modern tasarım',
              'Konforlu yaşam alanı',
              'Yüksek kaliteli malzeme',
              'Geniş balkon'
            ],
            reviews: [
              { name: 'Mehmet B.', text: 'Harika bir ev, çok memnun kaldım. Ev beklediğimden daha kaliteli çıktı.', rating: '★★★★★' },
              { name: 'Elif A.', text: 'Tasarımı çok şık, fakat bazı parçaları montajı biraz zorladı. Genel olarak iyi.', rating: '★★★☆☆' }
            ],
            link: '/properties/'
          },
          {
            image: lüxev,
            title: 'Classic Style Villa',
            code: '12347',
            price: '5999,00',
            description: 'Klasik tasarımı ve zarif detaylarıyla Classic Style Villa, şıklığı ve rahatlığı bir arada sunar. Her türlü dekorasyon stiliyle uyum sağlar.',
            features: [
              'Klasik tasarım',
              'Zarif detaylar',
              'Yüksek konfor',
              'Şık dekorasyon'
            ],
            reviews: [
              { name: 'Ahmet Y.', text: 'Mükemmel bir tasarım ve konfor. Bu fiyata böyle kaliteli bir ev bulmak zor.', rating: '★★★★☆' },
              { name: 'Fatma G.', text: 'Ev çok güzel ama biraz soğuk. Yine de beğendim.', rating: '★★★☆☆' }
            ],
            link: '/properties/'
          },
        ],
        currentIndex: 0
      };
    },
    computed: {
      currentProperty() {
        return this.properties[this.currentIndex];
      }
    },
    methods: {
      updateCurrentProperty(index) {
        this.currentIndex = index;
      }
    },
    mounted() {
      const carousel = document.getElementById('propertyCarousel');
      carousel.addEventListener('slid.bs.carousel', (event) => {
        this.updateCurrentProperty(event.to);
      });
    }
  }
  </script>
  
  <style scoped>
  .carousel-inner img {
    height: 500px; /* Resimlerin yüksekliğini belirle */
    object-fit: cover; /* Resimlerin kırpılmasını önler */
    border-radius: 10px; /* Köşeleri yuvarla */
  }
  
  .card {
    transition: transform 0.3s ease-in-out;
    border-radius: 10px;
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .review-section {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
  
  .review-item {
    margin-bottom: 20px;
  }
  
  .review-text {
    font-style: italic;
  }
  
  .faq-section {
    margin-bottom: 5rem; /* Alt margini arttırarak footer'dan uzaklaştır */
  }
  
  .faq-item {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .faq-item hr {
    border: 0;
    border-top: 1px solid #ddd;
    margin: 10px 0;
  }
  
  .faq-item h5 {
    font-size: 18px;
  }
  
  .faq-item p {
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    .carousel-inner img {
      height: auto;
    }
  }
  </style>
  