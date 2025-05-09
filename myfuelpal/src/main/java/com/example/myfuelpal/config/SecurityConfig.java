package com.example.myfuelpal.config;

// import jakarta.servlet.Filter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
// import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

// import static com.example.gamerise.api.model.Permission.*;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;
// import static com.example.gamerise.api.model.Role.*;
// import static org.springframework.http.HttpMethod.DELETE;
// import static org.springframework.http.HttpMethod.GET;
// import static org.springframework.http.HttpMethod.POST;
// import static org.springframework.http.HttpMethod.PUT;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final AuthenticationProvider authenticationProvider;
//    private static final String[] WHITE_LIST_URL = {
//        "/api/auth/**",
//        "/api/vehicles/**",
//        "/api/fuelnotes/**"
//};

    private static final String[] WHITE_LIST_URL = {
            "/",
            "/index.html",
            "/static/**",
            "/favicon.ico",
            "/logo192.png",
            "/manifest.json",
            "/api/auth/**",
            "/api/vehicles/**",
            "/api/fuelnotes/**"
    };


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(req ->
                        req.requestMatchers(WHITE_LIST_URL)
                        .permitAll()
                        // .requestMatchers("/api/admin/**").hasAnyRole(ADMIN.name())
                        // .requestMatchers(GET, "/api/admin/**").hasAnyAuthority(ADMIN_READ.name())
                        // .requestMatchers(POST, "/api/admin/**").hasAnyAuthority(ADMIN_CREATE.name())
                        // .requestMatchers(PUT, "/api/admin/**").hasAnyAuthority(ADMIN_UPDATE.name())
                        // .requestMatchers(DELETE, "/api/admin/**").hasAnyAuthority(ADMIN_DELETE.name())
                        .anyRequest()
                        .authenticated())
                .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}
