---
title: contrôleur de domaine WS2022
publishDate: 2025-04-13 00:00:00
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

