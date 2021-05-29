export class ClassGlobalConstants{
  public static API_BASE = 'http://158.109.74.51:55001/';
  // public static API_BASE = 'http://127.0.0.1:8000/';
  public static API_LOGIN = ClassGlobalConstants.API_BASE + 'auth/login/';
  public static API_REFRESH = ClassGlobalConstants.API_BASE + 'api-token-refresh/';

  public static API_PATIENT = ClassGlobalConstants.API_BASE + 'patient/';
  public static API_FLOOR = ClassGlobalConstants.API_BASE + 'floor/';
  public static API_VISITA = ClassGlobalConstants.API_BASE + 'appointment/';
  static REFRESH_MIN = 10;
  static KEY_PACIENTE_ID = 'ID_PACIENTE_FIJADO';
  static KEY_NOMBRE_PACIENTE_FIJADO = 'NOMBRE_PACIENTE_FIJADO';
  static KEY_IS_PANTALLA_PRINCIPAL = 'KEY_PANTALLA_PRINCIPAL';
  static MENU_LAST_PATIENT = 'Último paciente visitado';
  static MENU_FIX_PATIENT = 'Paciente fijado';
  static MENU_PANTALLA_PRINCIPAL = 'Lista pacientes';
  static MENU_OUT_PACIENTE = 'out';
  static DELAY_PROGRESS_BAR = 1500;

}
