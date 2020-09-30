FROM node:12.16.1-stretch

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# set timezone
ARG TimeZone=Asia/Taipei
RUN ln -snf /usr/share/zoneinfo/${TimeZone} /etc/localtime
RUN echo ${TimeZone} > /etc/timezone

# Configure apt and install packages
RUN apt-get update \
  && apt-get -y install --no-install-recommends apt-utils dialog 2>&1 \
  && apt-get -y install --no-install-recommends wget ca-certificates 2>&1 \
  #
  # Install git, process tools, lsb-release (common in install instructions for CLIs)
  && apt-get -y install git procps curl lsb-release \
  #
  # Create a non-root user to use if preferred
  && groupadd --gid $USER_GID $USERNAME \
  && useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME \
  && mkdir -p /home/${USERNAME}/.vscode-server \
  && mkdir -p /home/${USERNAME}/.vscode-server-insiders \
  && chown ${USER_UID}:${USER_GID} /home/${USERNAME}/.vscode-server* \
  #
  # Add sudo support for the non-root user
  && apt-get install -y sudo \
  && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME\
  && chmod 0440 /etc/sudoers.d/$USERNAME \
  #
  # Clean up
  && apt-get autoremove -y \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/*

# Switch back to dialog for any ad-hoc use of apt-get
ENV DEBIAN_FRONTEND=

# Create app directory
WORKDIR /usr/workspace

USER ${USERNAME}
