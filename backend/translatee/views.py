from django.shortcuts import render
from deep_translator import GoogleTranslator
# Create your views here.

# langs_dict = GoogleTranslator().get_supported_languages(as_dict=True)
# print(langs_dict)

text = """
Krishna Mercy, an online sanctuary of spiritual wisdom and divine grace, pays homage to the venerable His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, the illustrious founder-acharya of the International Society for Krishna Consciousness. Within the hallowed realm of this digital haven, we journey through the sacred annals of the Brahma-Madhva-Gaudiya sampradaya, guided by the luminous teachings of this bona fide spiritual luminary.

His Divine Grace Swami Prabhupada, a beacon of spiritual enlightenment, unfailingly imparts the timeless message of the Lord through his profound wisdom. His profound influence has traversed the globe, initiating countless souls into the sublime path of devotion. Eminent spiritual authorities have extolled the authenticity of his literary works, bestowing upon them the highest accolades.

Prabhupadavani.org, our sacred cyberspace, stands as a testament to the life and legacy of Swami Prabhupada. Here, we meticulously curate an auditory treasury, intimately intertwined with his divine presence. Our virtual archives reverberate with the mellifluous cadence of his addresses, the profundity of his conferences, the wisdom of his interviews, and the serenity of his room and morning walks conversations.

Furthermore, we dedicate a significant segment of our cherished domain to the mellifluous narration of his voluminous literary contributions. These cherished texts, the very essence of spiritual wisdom, are readily accessible through the online Bhaktivedanta Vedabase, enriching the hearts and minds of seekers and devotees alike.

At Krishna Mercy, we invite you to immerse yourself in the ethereal resonance of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada's teachings, as we strive to illuminate the path to transcendence and grace, uniting souls in the pursuit of spiritual enlightenment and divine mercy.
"""

translated = GoogleTranslator(source="auto", target="hi").translate(text)
with open("text.txt", "w", encoding="utf-8") as hindi:
    hindi.write(translated)
print(translated)
