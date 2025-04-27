---
title: Stage 2nde année BTS SIO SISR
publishDate: 2025-01-01 00:00:00
img: /assets/17-rese.jpg
img_alt: Mise en place d'un RADIUS
description:  Mise en place d'un RADIUS
tags:
  - Windows serveur
  - Réseau
  - 802.1X/RADIUS
  - WIFI
  - Cybeséurité
---

### Ajout d'un serveur d'authentification RADIUS

Lors de mon second stage, j'ai été missionné pour mettre en place un serveur d'authentification RADIUS sous Windows Server 2022.  
Le matériel mis à ma disposition était le suivant :
- Une machine Windows Server, jointe au domaine
- Un switch
- Un point d'accès Wi-Fi
- Un client de test
- Un client léger

Le projet avait déjà été amorcé six mois auparavant par un précédent stagiaire, dont la documentation m'a été transmise.

#### Reprise du projet
À mon arrivée, j'ai constaté que le serveur de certificats (AD CS) avait été modifié par l'administrateur cybersécurité et ne fonctionnait plus correctement.  
J'ai donc commencé par reconfigurer le service de certificats, puis j'ai renouvelé les certificats expirés depuis le dernier passage du précédent stagiaire.

#### Configuration
➡️ [📄 Documentation détaillée de la configuration](/assets/livrables/RAdiusSTGINFO.docx.pdf)

#### Phase de test
Une fois la configuration terminée, j'ai débuté la phase de tests. Plusieurs problèmes ont été identifiés :

- **Connexion avec certificat expiré :**
  - **Résultat :** Impossible de se connecter si le certificat a expiré.
  - **Solution :** Mettre en place un renouvellement automatique du certificat lorsqu'il reste moins d'une certaine durée avant expiration.

- **Connexion avec un client léger ancien :**
  - **Résultat :** La configuration RADIUS n'est pas possible sur certaines anciennes versions.
  - **Solution temporaire :** Configurer les ports concernés en authentification par adresse MAC.
  - **Solution long terme :** Mettre à jour les clients légers vers des versions plus récentes compatibles avec l'authentification RADIUS.

---

#### Résultat 

À la fin de mon stage, la RESE disposait :
- Un Wifi avec la connexion automatique des utilisateurs via leurs identifiants Active Directory.
- Un accès limité aux prises Ethernet  ( du switch mais peut être étendu au réseau entier) avec une authentification RADIUS/802.1X
- Un Windows Server avec AD CS configuré