# Minimum Boilerplate Theme
Use this template to start a new Store Framework Theme from zero.


## Table of Contents
- [Getting Started](#getting-started)
  * [Step 1. Complete the basic setup](#step-1-complete-the-basic-setup)
  * [Step 3. Create a workspace](#step-3-create-a-workspace)
  * [Step 3. Clone this resitory](#step-3-clone-this-resitory)
  * [Step 4. Prepare your Manifest.json](#step-4-prepare-your-manifestjson)
  * [Step 5. Install required apps](#step-5-install-required-apps)
  * [Step 6. Uninstall any installed theme](#step-6-uninstall-any-installed-theme)
  * [Step 7. Run and preview your store](#step-7-run-and-preview-your-store)
- [Tips](#tips)

## Getting Started

### Step 1. Complete the basic setup
Go to the [Basic Setup Guide](https://vtex.io/docs/getting-started/build-stores-with-vtex-io/2) in the VTEX IO docs and complete it.

You should have the VTEX command line interface installed and
where to go after you finish.

### Step 3. Create a workspace
It is a good practice to always begin a development session in an environment
separated from production. We call then workspace.

Create a workspace with the following command:

```bash
vtex use <YOUR_NAME>
```

Replace `<YOUR_NAME>` for your workspace name.

### Step 3. Clone this resitory
Get this repository and continue the following steps on a
terminal inside its directory.

### Step 4. Prepare your Manifest.json
The vendor is the account you are working on, and the name is
anything you want to name your theme after.

i.e:
```json
{
  "vendor": "storecomponents",
  "name": "my-test-theme",
}
```

### Step 5. Install required apps
To use Store Framework to build your stores, you need to have
both `vtex.store-sitemap` and `vtex.store` installed.

Run `vtex list` and check if you can find those app installed.

If they aren't installed, run the following to install:

```bash
vtex install vtex.store-sitemap vtex.store -f
```

### Step 6. Uninstall any installed theme
Run `vtex list` and check if you have any theme installed. It
is common to have `vtex.store-theme` installed when you are
just starting, so check if it is there.

To uninstall a theme, simply copy the name of theme and use the command `vtex uninstall`

i.e.
```bash
vtex uninstall vtex.store-theme
```

### Step 7. Run and preview your store
To start your development session, you want to send all your local files to VTEX where it will build the store everytime you edit a file.

You will do that with:
```bash
vtex link
```

After you read the message `App linked successfully`, run the following command in another terminal window:
```bash
vtex browse
```
This will open a browser window with your linked store in it.

## Tips

Our blocks files use the `.jsonc` extension, which is just a JSON that accepts comments.

If you are workin gwith the `.jsonc` extension, install a json interpreter in
your IDE that does accept it so you can still get json validation highlights.


