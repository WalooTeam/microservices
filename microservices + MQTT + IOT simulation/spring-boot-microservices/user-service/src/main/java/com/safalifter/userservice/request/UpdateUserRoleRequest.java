package com.safalifter.userservice.request;

import com.safalifter.userservice.enums.Role;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class UpdateUserRoleRequest {
    @NotBlank
    private String id;

    @NotNull
    private Role role;
}