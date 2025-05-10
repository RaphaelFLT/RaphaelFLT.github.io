---
title: Puit de Logs GRAYLOG
publishDate: 2025-05-05 00:00:00
img: /assets/Graylog-logo.jpg
img_alt: Ajout d'un puit de logs sur le réseau d'entreprise
description: Ajout d'un puit de logs sur le réseau d'entreprise
tags:
  - Logs
  - Debian
  - Cybersécurité
---
Second semestre, seconde année BTS SIO SISR

#### Contexte et objectifs
Avec l'augmentation des cyberattaques et des menaces de sécurité, DMH a pris conscience
de la nécessité de renforcer la sécurité de son infrastructure informatique. Actuellement, la
société utilise des solutions de sécurité basiques qui ne sont plus suffisantes pour protéger
efficacement ses données sensibles et ses systèmes critiques. Plusieurs incidents récents ont
mis en lumière des failles de sécurité qui pourraient avoir des conséquences désastreuses si
elles étaient exploitées par des attaquants.

#### Objectifs du Projet
L'objectif principal de ce projet est de sécuriser l'infrastructure de la société DMH en mettant
en place un SIEM (Security Information and Event Management), un IPS (Intrusion Prevention
System) et un centre de supervision. Ces solutions permettront de :
1. Détecter et Répondre aux Menaces en Temps Réel : Le SIEM centralisera les logs et
les événements de sécurité provenant de différentes sources, permettant une analyse
en temps réel et une réponse rapide aux incidents.
2. Prévenir les Intrusions : L'IPS surveillera le trafic réseau et bloquera les activités
malveillantes avant qu'elles ne puissent causer des dommages.
3. Superviser et Gérer la Sécurité : Le centre de supervision offrira une vue d'ensemble
de l'état de sécurité de l'infrastructure, permettant aux équipes de sécurité de DMH de
surveiller et de gérer efficacement les incidents.

#### Organisation
- Chaque membre de l’équipe aura en charge un des sous-projets
- Chaque semaine, un étudiant jouera le rôle de chef de projet. Un compte rendu sera
systématiquement rédigé pour chaque séance suivante. Il s’appuiera sur les états
d’avancement tenus par tous les membres de son équipe sur leur travail respectif. Un
outil de travail collaboratif et / ou de gestion de projet de votre choix (par exemple
Trello) pourra être utilisé.
- Il s’agit aussi d’un travail d’équipe, l’étudiant en difficulté bénéficiera de l’aide de ses
partenaires.

#### Sous-projet D – SIEM (splunk ou graylog)
Objectifs
- Identifier les différentes sources de log
- Installation de l’outil
- Paramétrage de la centralisation des logs sur l’outil
- Configuration des forwarders de log sur les sources pour définir les alertes à remonter
- Définir les règles de détection d’anomalies
- Configurer les alertes pour prévenir l’équipe de supervision (email, sms ...)

Attendus
- Une documentation sur l’outil et la mise en œuvre de l’outil choisi
- Un document décrivant les procédures de surveillance continue pour détecter et répondre
aux incidents de sécurité.
- Un document précisant comment mettre à jour régulièrement les règles et les
configurations pour maintenir la sécurité de l'infrastructure
- Une fiche de procédure des tests réalisés.

--- 

##### Choix des logs 

L'une des permière mission a été de selectionner quelles machines allait devoir m'envoyer leurs logs. Les logs des machines suivantes on été jugé plus importants : 
- __Controleur de domaine__ WS2022.dmh.btp
- __IPS__ suricata.dmh.btp
- __PRTG__ Supervision.dmh.btp
- __Routeur_ PfSense.dmh.btp

Une fois les logs receullis, il a fallut se poser la question des alertes à metre en place. 
La sécurité etant primordial, des alertes relatives aux utilisateurs a haut droits on été misent en place tel que : 
 - Alerte lors de la connexion par RDP d'un Admninistrateur
    - nom d'utilisateur 
    - IP de connexion
    - horraires de connexion 
 - Alerte lors de la connexion par VPN 
    - nom d'utilisateur 
    - IP de connexion
    - horraires de connexion 
 - Alerte lors de la connexion par SSH 
     - nom d'utilisateur 
     - IP de connexion
     - horraires de connexion

Pour des raisons pratiques, les notifications sont envoyés vers un serveur Discord spécialement créé pour le Projet. 

![](/assets/livrables/notif.png) 
![](/assets/livrables/notif2.png) 

[📄 Ma doc d'installation](/assets/livrables/GL-install.pdf)

[📄 Ma doc De configuration](/assets/livrables/GL-config.pdf)