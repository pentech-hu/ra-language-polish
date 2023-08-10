import { TranslationMessages } from 'ra-core';

const polishMessages: TranslationMessages = {
  ra: {
    action: {
      add_filter: 'Dodaj filtr',
      add: 'Dodaj',
      back: 'Powrót',
      bulk_actions: 'Zaznaczono %{smart_count}',
      cancel: 'Anuluj',
      clear_array_input: 'Clear the list',
      clear_input_value: 'Wyczyść',
      clone: 'Sklonuj',
      confirm: 'Potwierdź',
      create: 'Dodaj',
      create_item: 'Create %{item}',
      delete: 'Usuń',
      edit: 'Edytuj',
      export: 'Eksportuj',
      list: 'Lista',
      refresh: 'Odśwież',
      remove_filter: 'Usuń filtr',
      remove_all_filters: 'Remove all filters',

      remove: 'Usuń',
      save: 'Zapisz',
      search: 'Szukaj',
      select_all: 'Select all',
      select_row: 'Select this row',
      show: 'Pokaż',
      sort: 'Sortuj',
      undo: 'Cofnij',
      unselect: 'Odznacz',
      expand: 'Rozwiń',
      close: 'Zamknij',
      open_menu: 'Otwórz menu',
      close_menu: 'Zamknij menu',
      update: 'Update',
      move_up: 'Move up',
      move_down: 'Move down',
      open: 'Open',
      toggle_theme: 'Toggle Theme',
      select_columns: 'Columns',
    },
    boolean: {
      true: 'Tak',
      false: 'Nie',
      null: '',
    },
    page: {
      create: 'Dodaj %{name}',
      dashboard: 'Panel główny',
      edit: '%{name} #%{id}',
      error: 'Coś poszło nie tak',
      list: 'Lista %{name}',
      loading: 'Ładowanie',
      not_found: 'Nie znaleziono',
      show: '%{name} #%{id}',
      empty: 'Nie utworzono %{name}.',
      invite: 'Czy chcesz dodać nowy?',
    },
    input: {
      file: {
        upload_several:
          'Upuść tutaj pliki aby je wysłać lub kliknij tutaj i wybierz.',
        upload_single: 'Upuść tutaj plik aby go wysłać lub kliknij i wybierz.',
      },
      image: {
        upload_several:
          'Upuść tutaj obrazy aby je wysłać lub kliknij tutaj i wybierz.',
        upload_single:
          'Upuść tutaj obraz aby go wysłać lub kliknij tutaj i wybierz.',
      },
      references: {
        all_missing: 'Nie znaleziono pasujących odnośników.',
        many_missing:
          'Minimum jeden z pasujących odnośników nie jest dostępny.',
        single_missing: 'Powiązany odnośnik nie jest już dostępny.',
      },
      password: {
        toggle_visible: 'Ukryj hasło',
        toggle_hidden: 'Pokaż hasło',
      },
    },
    message: {
      about: 'O',
      are_you_sure: 'Czy jesteś pewien?',
      auth_error:
        'An error occurred while validating the authentication token.',

      bulk_delete_content:
        'Czy jesteś pewien że chcesz usunąć %{name}? |||| Czy jesteś pewien że chcesz usunąć te %{smart_count} rekordów?',
      bulk_delete_title:
        'Usuń %{name} |||| Usuń %{smart_count} %{name} rekordy',
      bulk_update_content:
        'Are you sure you want to update this %{name}? |||| Are you sure you want to update these %{smart_count} items?',
      bulk_update_title: 'Update %{name} |||| Update %{smart_count} %{name}',
      clear_array_input: 'Are you sure you want to clear the whole list?',

      delete_content: 'Czy na pewno chcesz usunąć ten rekord?',
      delete_title: 'Usuń %{name} #%{id}',
      details: 'Szczegóły',
      error: 'Wystąpił błąd, twoje żądanie nie zostało ukończone',
      invalid_form: 'Formularz nie jest poprawny, sprawdź błędy.',
      loading: 'Strona jest ładowana, poczekaj tylko chwilę.',
      no: 'Nie',
      not_found: 'Wpisałeś zły URL lub zostałeś niepoprawnie przeniesiony.',
      yes: 'Tak',
      unsaved_changes:
        'Niektóre zmiany nie zostały zapisane. Czy jesteś pewien, że chcesz je zignorować?',
    },
    navigation: {
      no_results: 'Nie znaleziono wyników',
      no_more_results:
        'Numer strony %{page} znajduje się poza granicą. Spróbuj poprzednią stronę.',
      page_out_of_boundaries: 'Numer strony %{page} znajduje się poza granicą',
      page_out_from_end: 'Nie można przejść dalej niż ostatnia strona',
      page_out_from_begin: 'Nie można przejść wcześniej niż pierwsza strona',
      page_range_info: '%{offsetBegin}-%{offsetEnd} z %{total}',
      partial_page_range_info:
        '%{offsetBegin}-%{offsetEnd} of more than %{offsetEnd}',
      current_page: 'Page %{page}',
      page: 'Go to page %{page}',
      first: 'Go to first page',
      last: 'Go to last page',
      next: 'Następna',
      previous: 'Poprzednia',
      page_rows_per_page: 'Wiersze na stronę:',
      skip_nav: 'Przejdź do treści',
    },
    sort: {
      sort_by: 'Sortuj wg. %{field} %{order}',
      ASC: 'rosnąco',
      DESC: 'malejąco',
    },
    auth: {
      auth_check_error: 'Zaloguj się, aby kontynuować',
      user_menu: 'Profil',
      username: 'Nazwa użytkownika',
      password: 'Hasło',
      sign_in: 'Zaloguj',
      sign_in_error: 'Logowanie się nie powiodło, spróbuj ponownie',
      logout: 'Wyloguj',
    },
    notification: {
      updated:
        'Element zaktualizowany |||| Zaktualizowano %{smart_count} elementów',
      created: 'Element stworzony',
      deleted: 'Element usunięty |||| Usunięto %{smart_count} elementów',
      bad_item: 'Niepoprawny element',
      item_doesnt_exist: 'Element nie istnieje',
      http_error: 'Problem z połączeniem serwera',
      data_provider_error: 'Błąd przy pobieraniu danych. Sprawdź konsolę.',
      i18n_error: 'Nie można załadować tłumaczeń dla określonego języka',
      canceled: 'Akcja anulowana',
      logged_out: 'Twoja sesja wygasła, zaloguj się ponownie.',
      not_authorized: "You're not authorized to access this resource.",
    },
    validation: {
      required: 'Wymagany',
      minLength: 'Musi być minimum %{min} znaków',
      maxLength: 'Musi być maksimum %{max} znaków',
      minValue: 'Musi być minimum %{min}',
      maxValue: 'Musi być maksimum %{max}',
      number: 'Musi być liczbą',
      email: 'Musi być poprawnym adresem email',
      oneOf: 'Musi być jednym z: %{options}',
      regex: 'Musi pasować do konkretnego formatu (regexp): %{pattern}',
      unique: 'Must be unique',
    },
    saved_queries: {
      label: 'Saved queries',
      query_name: 'Query name',
      new_label: 'Save current query...',
      new_dialog_title: 'Save current query as',
      remove_label: 'Remove saved query',
      remove_label_with_name: 'Remove query "%{name}"',
      remove_dialog_title: 'Remove saved query?',
      remove_message:
        'Are you sure you want to remove that item from your list of saved queries?',
      help: 'Filter the list and save this query for later',
    },
    configurable: {
      customize: 'Customize',
      configureMode: 'Configure this page',
      inspector: {
        title: 'Inspector',
        content: 'Hover the application UI elements to configure them',
        reset: 'Reset Settings',
        hideAll: 'Hide All',
        showAll: 'Show All',
      },
      Datagrid: {
        title: 'Datagrid',
        unlabeled: 'Unlabeled column #%{column}',
      },
      SimpleForm: {
        title: 'Form',
        unlabeled: 'Unlabeled input #%{input}',
      },
      SimpleList: {
        title: 'List',
        primaryText: 'Primary text',
        secondaryText: 'Secondary text',
        tertiaryText: 'Tertiary text',
      },
    },
  },
};

export default polishMessages;
