        const tarotDeck = [
            { name: "0 - The Fool (Deli / Mecnun)", meaning: "Yepyeni ve plansız başlangıçlar, risk alma, saf inanç ve özgürlük dönemi.", image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg" },
            { name: "I - The Magician (Büyücü)", meaning: "Yeteneklerin açığa çıkması, odaklanma gücü, isteklerini gerçeğe dönüştürme potansiyeli.", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg" },
            { name: "II - The High Priestess (Azize)", meaning: "Güçlü sezgiler, gizem, bilinçaltının konuşması ve sabırla bekleme dönemi.", image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg" },
            { name: "III - The Empress (İmparatoriçe)", meaning: "Bolluk, bereket, yaratıcılık, doğa ile bağ kurma ve şefkatli büyüme.", image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg" },
            { name: "IV - The Emperor (İmparator)", meaning: "Otorite, düzen, mantık, finansal veya yönetsel istikrar ve koruma gücü.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/RWS_Tarot_04_Emperor.jpg/960px-RWS_Tarot_04_Emperor.jpg" },
            { name: "V - The Hierophant (Aziz / Peder)", meaning: "Gelenekler, ruhsal rehberlik, eğitim, kurallara uyma ve inanç dünyası.", image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg" },
            { name: "VI - The Lovers (Aşıklar)", meaning: "Önemli seçimler, ilişkilerde uyum, kalbin sesini dinleme ve büyük kararlar.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RWS_Tarot_06_Lovers.jpg/960px-RWS_Tarot_06_Lovers.jpg" },
            { name: "VII - The Chariot (Araba)", meaning: "Zafer, kararlılık, zorlukların üstesinden gelme ve kontrolü ele alma.", image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg" },
            { name: "VIII - Strength (Güç)", meaning: "İçsel güç, sabır, şefkatle gelen cesaret ve dürtüleri kontrol etme başarısı.", image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg" },
            { name: "IX - The Hermit (Ermiş)", meaning: "İçsel yolculuk, yalnızlık ihtiyacı, bilgelik arayışı ve derin düşünme.", image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg" },
            { name: "X - Wheel of Fortune (Kader Çarkı)", meaning: "Kaderin dönmesi, şans, beklenmedik değişimler ogün hayatın yeni döngüsü.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg" },
            { name: "XI - Justice (Adalet)", meaning: "Dürüstlük, hak edilenin alınması, sebep-sonuç ilişkileri ve hukuki/mantıksal kararlar.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg" },
            { name: "XII - The Hanged Man (Asılan Adam)", meaning: "Olaylara farklı perspektiften bakma, fedakarlık, duraklama ve teslimiyet.", image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg" },
            { name: "XIII - Death (Ölüm)", meaning: "Korkulmamalıdır; eski bir dönemin bitişi, kaçınılmaz dönüşüm ve yeniden doğuş.", image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg" },
            { name: "XIV - Temperance (Denge)", meaning: "Uyum, ölçülü olmak, sabır, zıtlıkları birleştirme ve ruhsal huzur.", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg" },
            { name: "XV - The Devil (Şeytan)", meaning: "Maddi dünyaya bağımlılık, takıntılar, korkularla yüzleşme ve zincirleri kırma vakti.", image: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg" },
            { name: "XVI - The Tower (Yıkılan Kule)", meaning: "Ani sarsıcı değişimler, eski tabuların yıkılması ve ardından gelecek özgürlük.", image: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg" },
            { name: "XVII - The Star (Yıldız)", meaning: "Umut, şifa, geleceğe duyulan güven, ilham ve karanlık günlerin sonu.", image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg" },
            { name: "XVIII - The Moon (Ay)", meaning: "İllüzyonlar, belirsizlikler, sırlar ve yüzeye çıkan bilinçaltı korkuları.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/The_Moon%2C_Waite-Smith_Tarot_Deck%2C_Yale_University.jpg/960px-The_Moon%2C_Waite-Smith_Tarot_Deck%2C_Yale_University.jpg" },
            { name: "XIX - The Sun (Güneş)", meaning: "Büyük başarı, neşe, canlılık, netlik, özgüven ve parıldama dönemi.", image: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg" },
            { name: "XX - Judgement (Mahkeme / Uyanış)", meaning: "Geçmişin değerlendirilmesi, içsel uyanış, çağrıya kulak verme ve kefaret.", image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg" },
            { name: "XXI - The World (Dünya)", meaning: "Bir döngünün başarıyla tamamlanması, bütünlük, zafer ve küresel başarı.", image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg" }
        ];

        const button = document.getElementById("drawBtn");
        const result = document.getElementById("result");
        const cardsContainer = document.getElementById("cardsContainer");
        const readingsContainer = document.getElementById("readingsContainer");

        // Bilgisayarındaki özel ses dosyasının yolu buraya bağlandı
        const flipSound = new Audio("magic.mp3");

        button.addEventListener("click", () => {
            const shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
            const selectedCards = shuffled.slice(0, 3); 
            const periods = ["Geçmiş", "Şimdi", "Gelecek"];

            cardsContainer.innerHTML = "";
            readingsContainer.innerHTML = "";
            result.style.display = "block";

            selectedCards.forEach((card, index) => {
                const cardBox = document.createElement("div");
                cardBox.className = "card-box";
                cardBox.innerHTML = `
                    <h3>${periods[index]}</h3>
                    <div class="flip-container" data-index="${index}">
                        <div class="flipper" id="flipper-${index}">
                            <div class="front"></div>
                            <div class="back">
                                <img src="${card.image}" alt="${card.name}">
                            </div>
                        </div>
                    </div>
                `;
                cardsContainer.appendChild(cardBox);

                const readingText = document.createElement("div");
                readingText.className = "reading-text";
                readingText.id = `reading-${index}`;
                readingText.innerHTML = `
                    <h4>${card.name}</h4>
                    <p>${card.meaning}</p>
                `;
                readingsContainer.appendChild(readingText);

                const flipContainer = cardBox.querySelector(".flip-container");
                flipContainer.addEventListener("click", () => {
                    const flipper = document.getElementById(`flipper-${index}`);
                    const textZone = document.getElementById(`reading-${index}`);

                    if (!flipper.classList.contains("flipped")) {
                        flipSound.currentTime = 0;
                        flipSound.play();

                        flipper.classList.add("flipped");
                        
                        setTimeout(() => {
                            textZone.classList.add("show");
                        }, 400);
                    }
                });
            });

            result.scrollIntoView({ behavior: 'smooth' });
        });

        // -------------------------------------------------------------
        // ARKA PLANDA MAİL GÖNDERME 
        // -------------------------------------------------------------
        const mysticForm = document.getElementById("mysticForm");
        const submitBtn = document.getElementById("submitBtn");

        mysticForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Sayfa yenilenmesini engelle
            
            submitBtn.textContent = "Bağlantı kuruluyor...";
            submitBtn.disabled = true;

            // Verileri arka planda Formspree'ye gönder
            const formData = new FormData(mysticForm);
            
            fetch(mysticForm.action, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    alert("Mesajınız iletildi, ilginiz için teşekkürler!"); // İstediğin uyarı penceresi
                    mysticForm.reset(); // Kutuları temizle
                } else {
                    alert("Lütfen tekrar deneyin.");
                }
            })
            .catch(error => {
                alert("Bir hata oluştu.");
            })
            .finally(() => {
                submitBtn.textContent = "Mesajını Evrene Gönder";
                submitBtn.disabled = false;
            });
        });
  
