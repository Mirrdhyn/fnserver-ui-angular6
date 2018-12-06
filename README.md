# FnServer UI on Angular6 with PWA ready

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Make sure that you have FnServer running on the same host to get this wabapp ready. If not, see `configuration` to change the API URL.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. You can add the option `--base-href /subfolder/` if needed.

## PWA and API configuration

Edit the `ngsw-config.json` file to change the API URL from `localhost:8080` to your FnServer. Find and replace `API_URL`, in services folder, to point to your FnServer API as well.

# FnServer API support

This webapp supports today almost all API from FnServer v2. See API at https://github.com/fnproject/fn

API | List | Edit
------------ | ------------------ | --------------------
Applications | :white_check_mark: | :white_large_square:
App Stats | :white_large_square: | :white_large_square:
Functions | :white_check_mark: | :white_check_mark:
Fn Stats | :white_large_square: | :white_large_square:
Triggers | :white_check_mark: | :white_check_mark:
Triggers Stats | :white_large_square: | :white_large_square:
Logs | :white_check_mark: | N/A
