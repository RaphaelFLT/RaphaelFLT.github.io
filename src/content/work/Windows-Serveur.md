---
title: Contrôleur de domaine WS2022
publishDate: 2024-01-08 00:00:00
img: /assets/WindowsServeur.png
img_alt: mise en place d'un contrôleur de domaine
description: |
  J'ai mis en place un contrôleur de domaine 
tags:
  - Windows server 2022
  - DHCP
  - DNS
  - GPO
  - Gestion des accès
---
#### Sous-projet A – Mise en place du contrôleur de domaine

Objectifs
- Mettre en place le contrôleur de domaine Windows 2022 Server (+DNS +DHCP)
- Mettre en place un espace de stockage de données (espaces privés et partagés)
et mettre en place les droits sachant que les membres d'un même service ont leur espace
personnel privé auquel personne ne peut accéder et des espaces de stockage partagés en
lecture seule sur lesquels uniquement le(s) responsable(s) ont le droit d'écriture.
-  Mettre ne place les GPO suivantes :
    - une GPO pour éteindre tous les postes à partir de 20h
    - une GPO créant un lecteur réseau pour les informaticiens
    - une GPO pour mettre en veille les PC de la RH/Compta/direction après 2 minutes
d'inactivité
- Écrire un script PowerShell qui permet d'ajouter automatiquement un utilisateur ou de le
supprimer. Les caractéristiques de l'utilisateur seront passées soit en paramètre soit par
l'intermédiaire d'un fichier
- Mettre en place une sauvegarde de l'AD et sa procédure de restauration en cas de
problème.
Attendus
- Un document exposant l'organisation du contrôleur de domaine (choix de login, choix de
stratégie de sécurité de mot de passe, organisation des UO, Groupes, liste des
utilisateurs...).
- Un document décrivant l'organisation de l'espace de fichiers (arborescences, partages).
- Le script de gestion des utilisateurs.

--- 

### 🖥️ Mise en place d’un contrôleur de domaine

Dans le cadre de la création de notre réseau d’entreprise, le cahier des charges imposait l’installation d’un **contrôleur de domaine sous Windows Server 2022**. J’ai donc pris en charge cette mission.

### 🎯 Objectifs du serveur Windows Server 2022

Le serveur avait plusieurs rôles critiques à remplir dans l'infrastructure :

- **Serveur DHCP** : attribution automatique des adresses IP sur le réseau.
- **Serveur DNS** : résolution des noms de domaine locaux.
- **Gestion des partages réseau** : contrôle des accès aux disques partagés.
- **Gestion des utilisateurs et des rôles** : via Active Directory.
- **Application de stratégies de groupe (GPO)** :
  - Extinction automatique de tous les postes clients à 20h.
  - Contrôle des accès aux disques selon les groupes utilisateurs.
- **Mise en place d’une procédure de sauvegarde** pour garantir la continuité de service.

### 🗂 Virtualisation de l'infrastructure

- Le serveur Windows Server 2022 a été **virtualisé sous Proxmox**.
- Les clients ont été **virtualisés sous VMware** sur nos machines hôtes.

### 📂 Documentation disponible

- 📄 [Contexte de l’AP – Réseau d’entreprise](/assets/contexte_DMH-1.pdf)
- 📄 [Documentation sur l’organisation du contrôleur de domaine](/assets/AP1-WSorganisation.pdf)
- 📄 [Documentation sur la procédure de sauvegarde](/assets/AP1-WSsauvegarde.pdf)

