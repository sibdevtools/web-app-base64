package com.github.simplemocks.web.app.base64;

import com.github.simple_mocks.localization_service.api.dto.LocalizationId;
import com.github.simplemocks.webapp.api.dto.HealthStatus;
import com.github.simplemocks.webapp.api.dto.WebApplication;
import jakarta.annotation.Nonnull;
import org.springframework.stereotype.Component;

import java.util.Set;

/**
 * @author sibmaks
 * @since 0.0.1
 */
@Component
public class WebAppBase64 implements WebApplication {
    @Nonnull
    @Override
    public String getCode() {
        return "web.app.base64";
    }

    @Nonnull
    @Override
    public String getFrontendUrl() {
        return "/web/app/base64/";
    }

    @Nonnull
    @Override
    public LocalizationId getIconCode() {
        return new LocalizationId(Constants.LOCALIZATION_SOURCE_ID, "web.app.base64");
    }

    @Nonnull
    @Override
    public LocalizationId getTitleCode() {
        return new LocalizationId(Constants.LOCALIZATION_SOURCE_ID, "web.app.base64.title");
    }

    @Nonnull
    @Override
    public LocalizationId getDescriptionCode() {
        return new LocalizationId(Constants.LOCALIZATION_SOURCE_ID, "web.app.base64.description");
    }

    @Nonnull
    @Override
    public Set<String> getTags() {
        return Set.of(
                "converter",
                "base64"
        );
    }

    @Nonnull
    @Override
    public HealthStatus getHealthStatus() {
        return HealthStatus.UP;
    }
}
