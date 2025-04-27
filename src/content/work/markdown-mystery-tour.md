---
title: Réseau complet sécurisé
publishDate: 2024-01-09 00:00:00
img: /assets/PTracer.png
img_alt: mise en place d'un réseau d'entreprise
description: |
  Nous avons mis en place un réseau complet d'une entreprise
tags:
  - Network
  - Packet Tracer
  - Cybersecurity
  - Debian 
  - Windows server
  - DHCP
  - DNS
---

Voici la suite de ton document en **Markdown** comme tu l'as demandé, basée sur ton début et le contexte extrait du fichier PDF :

---

# Mise en place d'un réseau complet

## Objectifs du projet

### 1. Maquettage du réseau

- Création d'un plan d'adressage IP et de routage avec segmentation VLAN pour les différents services.
- Simulation du réseau avec Packet Tracer et mise en œuvre d'une maquette sur un hyperviseur.
- Documentation détaillée pour reproduire la configuration.

### Sous-projets techniques

- **Contrôleur de domaine** :

  - Déploiement d'un serveur Windows Server 2022 avec Active Directory, DNS, DHCP.
  - Mise en place des stratégies de groupe (GPO) pour la gestion des utilisateurs et des droits.
  - Création de scripts PowerShell pour la gestion des utilisateurs.

- **Sécurité et VPN** :

  - Installation d'un pare-feu avec configuration des règles de filtrage.
  - Mise en place d'une DMZ pour les services web et configuration d'accès VPN sécurisé.

- **Serveur web et cluster** :

  - Mise en place d’un serveur web PHP dans la DMZ.
  - Mise en place d’un cluster web et d’un serveur MySQL sur un VLAN Serveur.
  - Déploiement d’une application CRUD connectée à la base de données.

---

## Phase 1 : Maquettage

### Objectifs de la Phase 1

- Proposer un plan d'adressage IP et de routage IP basé sur des VLANs.
- Simuler le réseau via Packet Tracer.
- Créer une maquette fonctionnelle sur un hyperviseur.
- Documenter en détail pour permettre la reproduction du réseau.

### Plan de segmentation VLAN prévu

Chaque service ou zone sera associé à un VLAN spécifique :

| Zone/Service                         | Nombre de postes | Remarques                              |
| ------------------------------------ | ---------------- | -------------------------------------- |
| Direction                            | 5                | 2 sous-réseaux (Direction / RH-Compta) |
| RH / Compta / Secrétariat            | 10               |                                        |
| Bureau d’étude                       | 12               | Partie du réseau Fabrication           |
| Service commercial                   | 30               |                                        |
| Atelier                              | 5                | Partie du réseau Fabrication           |
| Entrepôts / Service logistique       | 12               | Partie du réseau Fabrication           |
| Service informatique / Développement | 8                |                                        |
| Visiteurs (Wi-Fi sécurisé)           | Variable         |                                        |
| Salle serveurs                       | N/A              | VLAN spécifique                        |
| Sortie Internet                      | N/A              | VLAN spécifique                        |

### Plan d'adressage IP

![](/assets/livrables/adressage.png)

---

## Phase 2 : Sous-projets techniques

### Sous-projet A – Mise en place du contrôleur de domaine

**Objectifs** :
- Déploiement d'un Windows Server 2022 (Active Directory + DNS + DHCP).
- Création de l'organisation Active Directory :
  - Utilisateurs classés par service.
  - Groupes de sécurité.
  - Unités organisationnelles (OU).
- Mise en place des GPO suivantes :
  - Extinction automatique des postes après 20h.
  - Création d'un lecteur réseau pour les informaticiens.
  - Mise en veille rapide (2 min) pour les postes RH/Compta/Direction.
- Création de scripts PowerShell pour :
  - Ajouter/Supprimer des utilisateurs via paramètres ou fichier.
- Mise en œuvre de la sauvegarde/restauration de l'Active Directory.

**Livrables attendus** :
- Documentation de l'organisation du domaine et des GPO.
- Script PowerShell de gestion des utilisateurs.
- Procédures de sauvegarde/restauration Active Directory.
- Fiches de tests de validation.

---

### Sous-projet B – Mise en place du Pare-feu et de l'accès VPN

**Objectifs** :
- Déploiement d'un pare-feu adapté.
- Mise en place d'une DMZ pour les services exposés.
- Définition et mise en œuvre des règles de filtrage réseau.
- Configuration de l'accès internet sécurisé.
- Mise en place d’un VPN sécurisé pour accès à distance.

**Livrables attendus** :
- Sauvegarde de la configuration du pare-feu.
- Documentation sur les règles de filtrage et le diagramme de flux.
- Accès VPN fonctionnel.
- Fiches de tests de validation.

---

### Sous-projet C – Mise en place d'un proxy / cluster web

**Objectifs** :
- Déploiement d’un serveur Web PHP dans la DMZ.
- Déploiement d’un serveur MySQL sur le VLAN Serveur.
- Mise en œuvre d'un cluster web haute disponibilité.
- Déploiement d'une application CRUD avec BDD distante.
- Mise en place d’un serveur FTP sécurisé pour les mises à jour du site.

**Livrables attendus** :
- Documentation sur la configuration du serveur Web, du cluster, du serveur de BDD.
- Documentation sur l’implémentation de l'application CRUD.
- Documentation sur la configuration du serveur FTP sécurisé.
- Services fonctionnels validés par fiches de tests.

---
