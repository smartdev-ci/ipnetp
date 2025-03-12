<template>
    <footer class="footer">
        <div class="partners">
            <img v-for="(partner, index) in partners" :key="index" :src="partner" alt="Partner Logo"
                class="partner-logo" />
        </div>
        <div class="footer-content">
            <div class="footer-section contact-form">
                <h4>Contactez-nous</h4>
                <form @submit.prevent="submitForm">
                    <div class="form-group">
                        <label for="name">Nom</label>
                        <input type="text" id="name" v-model="form.name" required />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="form.email" required />
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" v-model="form.message" required></textarea>
                    </div>
                    <button type="submit" class="btn">Envoyer</button>
                </form>
            </div>
            <div class="footer-section">
                <h4>Nos spécialités</h4>
                <ul>
                    <li>Gestion commerciale</li>
                    <li>Financial Aid</li>
                    <li>Food Services</li>
                    <li>Housing</li>
                    <li>Information Technologies</li>
                    <li>Student Life</li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Nos Formations</h4>
                <ul>
                    <li>Formation initiale</li>
                    <li>Formation continue</li>
                    <!-- <li>Library</li>
                    <li>Time Schedule</li>
                    <li>Apply for Admissions</li>
                    <li>Pay My Tuition</li> -->
                </ul>
            </div>
            <div class="footer-section university-info">
                <h3>IPNETP</h3>
                <p>08 BP 2098 ABIDJAN 08, Abidjan, Côte d’Ivoire</p>
                <p>+225 27 22 44 67 69</p>
                <p>+225 27 22 48 50 35</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>IPNEPT tout droits reservés, 2025</p>
            <div class="social-icons">
                <span>🔗</span>
                <span>📘</span>
                <span>💬</span>
                <span>✉️</span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            partners: [
                "https://ipnetp.ci/wp-content/uploads/2023/12/p1.png",
                "https://ipnetp.ci/wp-content/uploads/2023/12/p6.png",
                "https://ipnetp.ci/wp-content/uploads/2023/12/p3.png",
                "https://ipnetp.ci/wp-content/uploads/2023/12/p2.png",
                "https://ipnetp.ci/wp-content/uploads/2023/12/p5.png",
                "https://ipnetp.ci/wp-content/uploads/2023/12/p4.png",
                "https://ipnetp.ci/wp-content/uploads/2023/12/p7.png"
            ],
            form: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Logique pour soumettre le formulaire
            console.log('Form submitted:', this.form);
            // Ajouter ici la logique de soumission (envoi par e-mail, API, etc.)
        }
    }
};
</script>

<style scoped>
.footer {
    background: #0f1e3d;
    color: white;
    padding: 40px 20px;
    text-align: center;
}

.partners {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 30px;
}

.partner-logo {
    width: 100px;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.partner-logo:hover {
    transform: scale(1.1);
    opacity: 0.8;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    flex-wrap: wrap;
}

.footer-section {
    flex: 1;
    padding: 10px;
    min-width: 200px;
    text-align: left;
}

.footer-section h4 {
    border-bottom: 2px solid #2ecc71;
    padding-bottom: 5px;
    margin-bottom: 10px;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin: 5px 0;
}

.contact-form form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact-form .form-group {
    display: flex;
    flex-direction: column;
}

.contact-form .form-group label {
    margin-bottom: 5px;
    font-size: 14px;
    color: #b4b4b4;
}

.contact-form .form-group input,
.contact-form .form-group textarea {
    padding: 10px;
    border: 1px solid #2ecc71;
    border-radius: 5px;
    background-color: #0f1e3d;
    color: white;
}

.contact-form .form-group input:focus,
.contact-form .form-group textarea:focus {
    outline-color: #2ecc71;
}

.contact-form .btn {
    background-color: #2ecc71;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.contact-form .btn:hover {
    background-color: #27ae60;
}

.footer-bottom {
    border-top: 1px solid #2ecc71;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
}

.social-icons {
    display: flex;
    gap: 20px;
}
</style>
