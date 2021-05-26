export class ClassGlobalConstants{
  public static API_BASE = 'http://158.109.74.51:55001/';
  // public static API_BASE = 'http://127.0.0.1:8000/';
  public static API_LOGIN = ClassGlobalConstants.API_BASE + 'auth/login/';
  public static API_REFRESH = ClassGlobalConstants.API_BASE + 'api-token-refresh/';

  public static API_PATIENT = ClassGlobalConstants.API_BASE + 'patient/';
  public static API_FLOOR = ClassGlobalConstants.API_BASE + 'floor/';
  public static API_VISITA = ClassGlobalConstants.API_BASE + 'appointment/';

}
