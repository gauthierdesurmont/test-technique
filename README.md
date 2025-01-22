# Test technique Paris Attitude

## Attention le projet doit être rendu sur un repo GitHub.

### Aucun fichier Zip ne sera accepté. Nous attendons que vous nous envoyez votre lien par email.

### Pour mener à bien ce test vous devrez créer un fichier .env contenant :

- USERNAME_APP=Admin
- PASSWORD=Admin

### Je vous demanderais de ne pas changer ces valeurs.

-------------------------------------------------------------------------------------------------------------------------------------------

# Objectif

## Ce test a pour but de vérifier votre aptitude à identifier, analyser et corriger des problèmes dans une application web existante. Voici une liste de problèmes constatés dans l'application. Votre mission sera de corriger ces problèmes et d'assurer un bon fonctionnement global de l'application.

-------------------------------------------------------------------------------------------------------------------------------------------

### Problèmes identifiés et attentes

Accès à la page de recherche :

- Problème : L'utilisateur ne peut pas accéder à la page de recherche sans saisir un quartier.

- Attendu : Permettre l'accès à la page de recherche sans quartier.

Affichage des biens dans la recherche :

- Problème : Aucun bien n'est visible si aucun quartier n'est sélectionné.

- Attendu : Lorsque aucun quartier n'est sélectionné, afficher l'ensemble des biens.

Connexion avec mot de passe :

- Problème : Impossible de se connecter avec un mot de passe correct.

- Attendu : Corriger la logique d'authentification pour valider les identifiants corrects.

Connexion persistante :

- Problème : Après connexion, l'utilisateur est déconnecté en actualisant la page.

- Attendu : Assurer une persistance de la connexion après actualisation.

Accès à la page "Favorites" sans connexion :

- Problème : L'utilisateur peut accéder à la page des favoris via l'URL sans être connecté.

- Attendu : Bloquer l'accès à cette page si l'utilisateur n'est pas connecté.

Modal de connexion sur la page "Favorites" :

- Problème : Même connecté, cliquer sur "Favoris" affiche la modal de connexion.

- Attendu : Supprimer l'ouverture de la modal si l'utilisateur est déjà connecté.

Filtres de loyer :

- Problème : Les filtres de loyer ne fonctionnent pas correctement.

- Attendu : Corriger les filtres pour qu'ils filtrent les biens en fonction des critères de loyer sélectionnés.

Enregistrement de recherche :

- Problème : Rien ne se passe lorsqu'un utilisateur connecté clique sur "Enregistrer ma recherche".

- Attendu : Vérifier que la fonctionnalité est bien implémentée.

Suppression de favoris :

- Problème : La suppression d'un favori ne fonctionne pas.

- Attendu : Corriger la fonctionnalité de suppression des favoris.

Suppression des recherches enregistrées :

- Problème : Le bouton de suppression des recherches enregistrées est manquant.

- Attendu : Ajouter un bouton pour permettre cette suppression et s'assurer que la méthode backend existante soit appelée correctement et qu'elle fonctionne bien.

Titre de l’onglet sur la page de recherche :

- Problème : Le titre de l’onglet n’est pas présent sur la page de recherche.

- Attendu : Ajouter un titre pertinent au niveau de l’onglet pour améliorer l’expérience utilisateur.

-------------------------------------------------------------------------------------------------------------------------------------------

## Déroulement

Identifiez les causes des problèmes listés.

Proposez des corrections pour chacun des problèmes.

Assurez-vous que les modifications soient testées et fonctionnelles.

Documentez vos changements.

-------------------------------------------------------------------------------------------------------------------------------------------

## Livrables

Une version corrigée de l'application.

Un rapport ou des commentaires expliquant les solutions appliquées.

Bonne chance !
