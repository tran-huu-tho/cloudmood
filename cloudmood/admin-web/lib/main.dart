import 'package:flutter/material.dart';
import 'screens/welcome_screen.dart';
import 'screens/dashboard_screen.dart';
import 'services/auth_service.dart';

void main() {
  runApp(const CloudMoodApp());
}

class CloudMoodApp extends StatelessWidget {
  const CloudMoodApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CloudMood Admin',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF667eea),
          primary: const Color(0xFF667eea),
        ),
        useMaterial3: true,
        fontFamily: 'Roboto',
      ),
      home: const AuthChecker(),
      routes: {
        '/dashboard': (context) => const DashboardScreen(),
        '/welcome': (context) => const WelcomeScreen(),
      },
    );
  }
}

class AuthChecker extends StatelessWidget {
  const AuthChecker({super.key});

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<bool>(
      future: AuthService.isLoggedIn(),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Scaffold(
            body: Center(
              child: CircularProgressIndicator(),
            ),
          );
        }

        if (snapshot.hasData && snapshot.data == true) {
          // User is logged in, show dashboard
          return const DashboardScreen();
        }

        // User is not logged in, show welcome/login screen
        return const WelcomeScreen();
      },
    );
  }
}
