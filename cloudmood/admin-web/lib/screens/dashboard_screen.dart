import 'package:flutter/material.dart';
import 'dart:convert';
import '../services/auth_service.dart';

class DashboardScreen extends StatefulWidget {
  const DashboardScreen({super.key});

  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  Map<String, dynamic>? userData;
  int _selectedIndex = 0;

  @override
  void initState() {
    super.initState();
    _loadUserData();
  }

  Future<void> _loadUserData() async {
    final userJson = await AuthService.getUser();
    if (userJson != null) {
      setState(() {
        userData = json.decode(userJson);
      });
    }
  }

  Future<void> _handleLogout() async {
    await AuthService.logout();
    if (!mounted) return;
    Navigator.pushReplacementNamed(context, '/');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          // Sidebar
          NavigationRail(
            selectedIndex: _selectedIndex,
            onDestinationSelected: (index) {
              setState(() {
                _selectedIndex = index;
              });
            },
            labelType: NavigationRailLabelType.all,
            backgroundColor: Color(0xFF667eea),
            selectedIconTheme: IconThemeData(color: Colors.white, size: 28),
            unselectedIconTheme: IconThemeData(color: Colors.white70, size: 24),
            selectedLabelTextStyle: TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.bold,
            ),
            unselectedLabelTextStyle: TextStyle(color: Colors.white70),
            leading: Container(
              padding: EdgeInsets.symmetric(vertical: 24),
              child: Column(
                children: [
                  Icon(Icons.cloud, color: Colors.white, size: 48),
                  SizedBox(height: 8),
                  Text(
                    'CloudMood',
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: 16,
                    ),
                  ),
                ],
              ),
            ),
            trailing: Expanded(
              child: Align(
                alignment: Alignment.bottomCenter,
                child: Padding(
                  padding: EdgeInsets.only(bottom: 24),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      if (userData != null)
                        Container(
                          padding: EdgeInsets.all(8),
                          margin: EdgeInsets.only(bottom: 16),
                          decoration: BoxDecoration(
                            color: Colors.white.withOpacity(0.2),
                            borderRadius: BorderRadius.circular(8),
                          ),
                          child: Column(
                            children: [
                              CircleAvatar(
                                backgroundColor: Colors.white,
                                child: Text(
                                  userData!['fullName'][0].toUpperCase(),
                                  style: TextStyle(
                                    color: Color(0xFF667eea),
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ),
                              SizedBox(height: 8),
                              Text(
                                userData!['fullName'],
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 12,
                                  fontWeight: FontWeight.bold,
                                ),
                                textAlign: TextAlign.center,
                              ),
                              Text(
                                userData!['email'],
                                style: TextStyle(
                                  color: Colors.white70,
                                  fontSize: 10,
                                ),
                                textAlign: TextAlign.center,
                              ),
                            ],
                          ),
                        ),
                      IconButton(
                        icon: Icon(Icons.logout, color: Colors.white),
                        onPressed: _handleLogout,
                        tooltip: 'Đăng xuất',
                      ),
                    ],
                  ),
                ),
              ),
            ),
            destinations: [
              NavigationRailDestination(
                icon: Icon(Icons.dashboard_outlined),
                selectedIcon: Icon(Icons.dashboard),
                label: Text('Dashboard'),
              ),
              NavigationRailDestination(
                icon: Icon(Icons.place_outlined),
                selectedIcon: Icon(Icons.place),
                label: Text('Địa điểm'),
              ),
              NavigationRailDestination(
                icon: Icon(Icons.category_outlined),
                selectedIcon: Icon(Icons.category),
                label: Text('Danh mục'),
              ),
              NavigationRailDestination(
                icon: Icon(Icons.map_outlined),
                selectedIcon: Icon(Icons.map),
                label: Text('Lộ trình'),
              ),
              NavigationRailDestination(
                icon: Icon(Icons.star_outline),
                selectedIcon: Icon(Icons.star),
                label: Text('Đánh giá'),
              ),
              NavigationRailDestination(
                icon: Icon(Icons.people_outline),
                selectedIcon: Icon(Icons.people),
                label: Text('Người dùng'),
              ),
            ],
          ),

          VerticalDivider(thickness: 1, width: 1),

          // Main Content
          Expanded(
            child: Container(
              color: Colors.grey.shade50,
              child: _buildContent(),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildContent() {
    switch (_selectedIndex) {
      case 0:
        return _buildDashboard();
      case 1:
        return _buildPlaceholder('Quản lý Địa điểm', Icons.place);
      case 2:
        return _buildPlaceholder('Quản lý Danh mục', Icons.category);
      case 3:
        return _buildPlaceholder('Quản lý Lộ trình', Icons.map);
      case 4:
        return _buildPlaceholder('Quản lý Đánh giá', Icons.star);
      case 5:
        return _buildPlaceholder('Quản lý Người dùng', Icons.people);
      default:
        return _buildDashboard();
    }
  }

  Widget _buildDashboard() {
    return SingleChildScrollView(
      padding: EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Dashboard',
                    style: TextStyle(
                      fontSize: 32,
                      fontWeight: FontWeight.bold,
                      color: Color(0xFF667eea),
                    ),
                  ),
                  Text(
                    'Chào mừng bạn đến với CloudMood Admin',
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.grey.shade600,
                    ),
                  ),
                ],
              ),
              Container(
                padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: [Color(0xFF667eea), Color(0xFF764ba2)],
                  ),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Row(
                  children: [
                    Icon(Icons.calendar_today, color: Colors.white, size: 16),
                    SizedBox(width: 8),
                    Text(
                      DateTime.now().toString().substring(0, 10),
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          SizedBox(height: 32),

          // Stats Cards
          GridView.count(
            crossAxisCount: 4,
            shrinkWrap: true,
            physics: NeverScrollableScrollPhysics(),
            crossAxisSpacing: 16,
            mainAxisSpacing: 16,
            childAspectRatio: 1.5,
            children: [
              _buildStatCard(
                'Tổng địa điểm',
                '156',
                Icons.place,
                Colors.blue,
              ),
              _buildStatCard(
                'Danh mục',
                '12',
                Icons.category,
                Colors.orange,
              ),
              _buildStatCard(
                'Lộ trình',
                '45',
                Icons.map,
                Colors.green,
              ),
              _buildStatCard(
                'Người dùng',
                '1,234',
                Icons.people,
                Colors.purple,
              ),
            ],
          ),
          SizedBox(height: 32),

          // Welcome Message
          Card(
            elevation: 2,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12),
            ),
            child: Container(
              padding: EdgeInsets.all(24),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(12),
                gradient: LinearGradient(
                  colors: [Color(0xFF667eea), Color(0xFF764ba2)],
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Icon(Icons.celebration, color: Colors.white, size: 48),
                  SizedBox(height: 16),
                  Text(
                    'Chào mừng đến với CloudMood Admin! 🎉',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(height: 8),
                  Text(
                    'Hệ thống quản lý du lịch thông minh được xây dựng bằng Flutter Web + NestJS',
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.white.withOpacity(0.9),
                    ),
                  ),
                  SizedBox(height: 16),
                  Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: [
                      _buildTechChip('Flutter Web', Icons.flutter_dash),
                      _buildTechChip('NestJS', Icons.code),
                      _buildTechChip('PostgreSQL', Icons.storage),
                      _buildTechChip('Prisma', Icons.data_object),
                      _buildTechChip('TypeScript', Icons.code_off),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildStatCard(String title, String value, IconData icon, Color color) {
    return Card(
      elevation: 2,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
      ),
      child: Padding(
        padding: EdgeInsets.all(12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          mainAxisSize: MainAxisSize.min,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  padding: EdgeInsets.all(6),
                  decoration: BoxDecoration(
                    color: color.withOpacity(0.1),
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Icon(icon, color: color, size: 20),
                ),
                Icon(Icons.trending_up, color: Colors.green, size: 16),
              ],
            ),
            SizedBox(height: 8),
            Flexible(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    value,
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: Colors.black87,
                    ),
                  ),
                  SizedBox(height: 2),
                  Text(
                    title,
                    style: TextStyle(
                      fontSize: 12,
                      color: Colors.grey.shade600,
                    ),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildTechChip(String label, IconData icon) {
    return Chip(
      avatar: Icon(icon, size: 16, color: Colors.white),
      label: Text(
        label,
        style: TextStyle(color: Colors.white, fontSize: 12),
      ),
      backgroundColor: Colors.white.withOpacity(0.2),
      side: BorderSide(color: Colors.white.withOpacity(0.3)),
    );
  }

  Widget _buildPlaceholder(String title, IconData icon) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(icon, size: 80, color: Colors.grey.shade300),
          SizedBox(height: 16),
          Text(
            title,
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
              color: Colors.grey.shade400,
            ),
          ),
          SizedBox(height: 8),
          Text(
            'Tính năng đang được phát triển',
            style: TextStyle(
              fontSize: 16,
              color: Colors.grey.shade400,
            ),
          ),
        ],
      ),
    );
  }
}
